import numpy as np

from rest.ImageConverter import ImageConverter
from rest.keras_models.ColorImageModel import ColorImageModel


class ColorImageService:
    def __init__(self, color_image_model):
        """
        :type color_image_model: ColorImageModel
        """
        self.model = color_image_model
        self.imageConverter = ImageConverter()

    def color_image(self, encoded_image):
        img = self.imageConverter.decode_image(encoded_image)
        img = [np.array(img.convert('RGB'))]
        img = np.array(img, dtype='float32') / 127.5 - 1
        print(type(img))
        colored_img = self.model.get_colored_image(img)
        colored_img = (colored_img + 1) / 2.0
        return self.imageConverter.encode_image(colored_img)

    def resize_photo(self, img):
        return img