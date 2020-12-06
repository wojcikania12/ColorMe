import numpy as np
from PIL import ImageOps
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
        img = self.__resize_photo(img.convert('RGB'))
        img = [np.array(img)]
        img = np.array(img, dtype='float32') / 127.5 - 1
        colored_img = self.model.get_colored_image(img)
        colored_img = (colored_img + 1) / 2.0
        return self.imageConverter.encode_image(colored_img)

    def __resize_photo(self, img):
        expected_size = (512, 512)
        img.thumbnail((expected_size[0], expected_size[1]))
        delta_width = expected_size[0] - img.size[0]
        delta_height = expected_size[1] - img.size[1]
        pad_width = delta_width // 2
        pad_height = delta_height // 2
        padding = (pad_width, pad_height, delta_width - pad_width, delta_height - pad_height)
        return ImageOps.expand(img, padding)
