import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ArtistModule } from './artist/artist.module';
import { FavoritesModule } from './favorites/favorites.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/nest-tests'),
    UserModule,
    ArtistModule,
    FavoritesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
