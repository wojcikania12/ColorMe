from rest.keras_models.ColorPhotoModel import ColorPhotoModel
from rest.services.ColorImageService import ColorImageService


class ColorPhotoService(ColorImageService):
    def __init__(self):
        super().__init__(ColorPhotoModel())
