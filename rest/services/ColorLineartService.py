from rest.keras_models.ColorLineartModel import ColorLineartModel
from rest.services.ColorImageService import ColorImageService


class ColorLineartService(ColorImageService):
    def __init__(self):
        super().__init__(ColorLineartModel())
