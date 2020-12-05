from rest.keras_models.ColorImageModel import ColorImageModel


class ColorPhotoModel(ColorImageModel):
    def __init__(self):
        super().__init__('photos')


