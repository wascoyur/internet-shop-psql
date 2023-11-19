// user.model.ts
type User = {
  id: number;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  role: string;
  basket?: Basket;
  ratings?: Rating[];
};

// basket.model.ts
type Basket = {
  id: number;
  userId: number;
  createdAt: Date;
  updatedAt: Date;
  user: User;
  basketItems?: BasketDevice[];
};

// basket-device.model.ts
type BasketDevice = {
  id: number;
  basketId: number;
  createdAt: Date;
  updatedAt: Date;
  basket: Basket;
  deviceId: number;
  device: Device;
};

// device.model.ts
export type Device = {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  price: number;
  rating: number;
  img: string;
  typeId: number;
  brandId: number;
  type: Type;
  brand: Brand;
  ratings?: Rating[];
  basketItems?: BasketDevice[];
  deviceInfo?: DeviceInfo[];
};


// type.model.ts
type Type = {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  devices?: Device[];
  brands?: Brand[];
  typeBrand?: TypeBrand[];
};

// brand.model.ts
type Brand = {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  devices?: Device[];
  types?: Type[];
  typeBrand?: TypeBrand[];
};

// rating.model.ts
type Rating = {
  id: number;
  rate: number;
  createdAt: Date;
  updatedAt: Date;
  userId: number;
  deviceId: number;
  user: User;
  device: Device;
};

// device-info.model.ts
type DeviceInfo = {
  id: number;
  title: string;
  createdAt: Date;
  updatedAt: Date;
  description: string;
  deviceId: number;
  device: Device;
};

// type-brand.model.ts
type TypeBrand = {
  typeId: number;
  brandId: number;
  createdAt: Date;
  updatedAt: Date;
  type: Type;
  brand: Brand;
};
