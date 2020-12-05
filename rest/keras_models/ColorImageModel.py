import os
from tensorflow.keras.models import load_model


class ColorImageModel:
    def __init__(self, model_dir):
        root_dir = os.path.dirname(os.path.abspath(model_dir))
        self.model = load_model(root_dir + '/gan/' + model_dir + '/generator.h5')

    def get_colored_image(self, photo):
        return self.model.predict(photo)
