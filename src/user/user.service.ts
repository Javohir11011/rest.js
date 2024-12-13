import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './schema/user.schema';
// import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(@InjectModel('users') private usersModel: Model<User>) {}
  async create(createUserDto: CreateUserDto) {
    // const saltOrRounds = 10;
    // const password = createUserDto.password;
    // const hash = await bcrypt.hash(password, saltOrRounds);
    const newUser = new this.usersModel(createUserDto);
    await newUser.save();
    return newUser;
  }

  async findAll() {
    const allUsers = await this.usersModel.find();
    return allUsers;
  }

  async findOne(id: string): Promise<User> {
    const user = await this.usersModel.findById(id);
    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const edidedUser = this.usersModel.findByIdAndUpdate(id, updateUserDto, {
      new: true,
    });
    return edidedUser;
  }

  async remove(id: string) {
    const delUser = this.usersModel.findByIdAndDelete(id);
    return delUser;
  }
}
