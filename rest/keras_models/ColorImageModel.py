

from tensorflow.keras.models import load_model


class ColorImageModel:
    def __init__(self, model_path):
        self.model = load_model(model_path)

    def get_colored_image(self, photo):
        return self.model.predict(photo)
