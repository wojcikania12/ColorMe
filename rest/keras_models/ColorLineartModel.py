from rest.keras_models.ColorImageModel import ColorImageModel


class ColorLineartModel(ColorImageModel):
    def __init__(self):
        super().__init__('sketches')


