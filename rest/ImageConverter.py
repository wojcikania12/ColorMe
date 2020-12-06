import base64
import io
from PIL import Image


class ImageConverter:

    def decode_image(self, im_b64):
        im_binary = base64.b64decode(im_b64)
        buf = io.BytesIO(im_binary)
        return Image.open(buf)

    def encode_image(self, image):
        img = Image.fromarray((image.squeeze() * 255).astype("uint8"))
        rawBytes = io.BytesIO()
        img.save(rawBytes, "JPEG")
        rawBytes.seek(0)
        img_base64 = base64.b64encode(rawBytes.read())
        return str(img_base64)

    def encode_image_with_filter(self, image):
        img = Image.fromarray(image.astype("uint8"))
        rawBytes = io.BytesIO()
        img.save(rawBytes, "JPEG")
        rawBytes.seek(0)
        img_base64 = base64.b64encode(rawBytes.read())
        return str(img_base64)
