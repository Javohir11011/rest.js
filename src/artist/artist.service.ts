import { Injectable } from '@nestjs/common';
import { CreateArtistDto } from './dto/create-artist.dto';
import { UpdateArtistDto } from './dto/update-artist.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Artist } from './schema/artist.schema';

@Injectable()
export class ArtistService {
  constructor(@InjectModel('artist') private artistModel: Model<Artist>) {}

  async create(createArtistDto: CreateArtistDto) {
    const newArtist = new this.artistModel(createArtistDto);
    await newArtist.save();
    return newArtist;
  }

  async findAll() {
    const allArtist = await this.artistModel.find();
    return allArtist;
  }

  async findOne(id: string) {
    const oneArtist = await this.artistModel.findById(id);
    return oneArtist;
    // return `This action returns a #${id} artist`;
  }

  async update(id: string, updateArtistDto: UpdateArtistDto) {
    const updateArtist = this.artistModel.findByIdAndUpdate(
      id,
      updateArtistDto,
      {
        new: true,
      },
    );
    return updateArtist;
    // return `This action updates a #${id} artist`;
  }

  async remove(id: string) {
    const delArtist = this.artistModel.findByIdAndDelete(id);
    return delArtist;
  }
}
