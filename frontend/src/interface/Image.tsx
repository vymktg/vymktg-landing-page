enum ImageFormat {
    JPEG = 'jpeg',
    JPG = 'jpg',
    PNG = 'png',
    GIF = 'gif',
  }

export interface ImageInterface { 
    src: string;
    width: number;
    height: number;
    format: ImageFormat,
}