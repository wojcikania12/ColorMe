import cv2
import numpy as np
from rest.ImageConverter import ImageConverter


class AddFilterService:
    def __init__(self):
        self.imageConverter = ImageConverter()

    def put_filters_on_image(self, encoded_image, color, transparency):
        img = self.imageConverter.decode_image(encoded_image)
        img = cv2.cvtColor(np.array(img), cv2.COLOR_RGB2BGR)
        overlay = img.copy()
        rgb_color = self.__hex_to_rgb(color)
        cv2.rectangle(overlay, (0, 0), (img.shape[1], img.shape[0]), rgb_color, -1)
        cv2.addWeighted(overlay, transparency, img, 1 - transparency, 0, img)
        return self.imageConverter.encode_image_with_filter(img)

    def __hex_to_rgb(self, hex):
        r = int(hex[0:2], 16)
        g = int(hex[2:4], 16)
        b = int(hex[4:6], 16)
        return (r, g, b)
