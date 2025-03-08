import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productsRepository: Repository<Product>,
  ) {}

  async createProduct(createProductDto: CreateProductDto) {
    const product = this.productsRepository.create({
      ...createProductDto,
      supplyNominal: Number(createProductDto.supplyNominal),
      consumption: Number(createProductDto.consumption),
      pressure: Number(createProductDto.pressure),
      price: Number(createProductDto.price),
    });

    return await this.productsRepository.save(product);
  }

  async updateProduct(id: string, updateProductDto: UpdateProductDto) {
    const product = await this.productsRepository.findOne({ where: { id } });

    if (!product) {
      throw new NotFoundException('Продукт не найден');
    }

    Object.assign(product, updateProductDto);
    return this.productsRepository.save(product);
  }

  async deleteProduct(id: string) {
    const product = await this.productsRepository.findOne({ where: { id } });

    if (!product) {
      throw new NotFoundException('Продукт не найден');
    }

    await this.productsRepository.delete(product.id);
    return { message: 'Продукт успешно удален' };
  }

  async findProductById(id: string) {
    const product = await this.productsRepository.findOne({ where: { id } });
    if (!product) {
      throw new NotFoundException('Продукт не найден');
    }
    return product;
  }

  async findAll() {
    return this.productsRepository.find();
  }
}
