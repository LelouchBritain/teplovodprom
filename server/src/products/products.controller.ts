import {
  Controller,
  Get,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  Headers,
  UploadedFile,
  UseGuards,
  UnauthorizedException,
  NotFoundException,
  Post,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { storage } from 'src/storageConfig';
import { FileInterceptor } from '@nestjs/platform-express';
import { AuthGuard } from 'src/users/auth.guard';
import { UsersService } from 'src/users/users.service';

@Controller('products')
export class ProductsController {
  constructor(
    private readonly productsService: ProductsService,
    private readonly usersService: UsersService,
  ) {}

  @Post()
  @UseGuards(AuthGuard)
  @UseInterceptors(FileInterceptor('image', storage))
  async create(
    @Headers('authorization') authorization: string,
    @Body() createProductDto: CreateProductDto,
    @UploadedFile() image: Express.Multer.File,
  ) {
    const token = authorization.replace('Bearer ', '');
    const user = await this.usersService.getUserByToken(token);

    if (!user) {
      throw new UnauthorizedException('Неверный токен');
    }
    if (image) {
      createProductDto.image = image.filename;
    }

    return this.productsService.createProduct(createProductDto);
  }

  @Patch(':id')
  async update(
    @Headers('authorization') authorization: string,
    @Param('id') id: string,
    @Body() updateproductDto: UpdateProductDto,
  ) {
    const token = authorization.replace('Bearer ', '');
    const user = await this.usersService.getUserByToken(token);

    if (!user) {
      throw new UnauthorizedException('Неверный токен');
    }

    const product = await this.productsService.findProductById(id);

    if (!product) {
      throw new NotFoundException('Продукт не найден');
    }

    return this.productsService.updateProduct(id, updateproductDto);
  }

  @Delete(':id')
  async delete(
    @Headers('authorization') authorization: string,
    @Param('id') id: string,
  ) {
    const token = authorization.replace('Bearer ', '');
    const user = await this.usersService.getUserByToken(token);

    if (!user) {
      throw new UnauthorizedException('Неверный токен');
    }

    const product = await this.productsService.findProductById(id);

    if (!product) {
      throw new NotFoundException('Продукт не найден');
    }
    return this.productsService.deleteProduct(id);
  }
  @Get()
  async findAll() {
    return this.productsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.productsService.findProductById(id);
  }
}
