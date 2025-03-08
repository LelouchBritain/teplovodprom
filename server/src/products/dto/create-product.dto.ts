import { Expose } from 'class-transformer';
import {
  IsNotEmpty,
  IsNumberString,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateProductDto {
  @Expose()
  @IsNotEmpty({ message: 'Название продукта не может быть пустым.' })
  @IsString({ message: 'Название продукта должно быть строкой.' })
  name: string;

  @Expose()
  @IsNotEmpty({ message: 'Номинальная подача не может быть пустой.' })
  @IsNumberString({}, { message: 'Номинальная подача должна быть числом.' })
  supplyNominal: string;

  @Expose()
  @IsNotEmpty({
    message: 'Минимальная-номинальная подача не может быть пустой.',
  })
  @IsString({ message: 'Минимальная-номинальная подача должна быть строкой.' })
  supplyMinMax: string;

  @Expose()
  @IsNotEmpty({ message: 'Напор не может быть пустой.' })
  @IsNumberString({}, { message: 'Напор должен быть числом.' })
  pressure: string;

  @Expose()
  @IsNotEmpty({
    message: 'Минимальный-максимальный напор не может быть пустым.',
  })
  @IsString({ message: 'Минимальный-максимальный напор должен быть строкой.' })
  pressureMinMax: string;

  @Expose()
  @IsNotEmpty({ message: 'Потребление не может быть пустым.' })
  @IsNumberString({}, { message: 'Потребление должно быть числом.' })
  consumption: string;

  @Expose()
  @IsNotEmpty({ message: 'Диаметр входа/выхода не может быть пустым.' })
  @IsString({ message: 'Диаметр входа/выхода должен быть строкой.' })
  diameter: string;

  @Expose()
  @IsNotEmpty({ message: 'Цена не может быть пустой.' })
  @IsNumberString({}, { message: 'Цена должна быть числом.' })
  price: string;

  @Expose()
  @IsOptional()
  @IsString({ message: 'Название изображения должно быть строкой.' })
  image?: string;
}
