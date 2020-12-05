from flask import request
from flask_restplus import Resource


from rest.services.AddFilterService import AddFilterService
from rest.services.ColorLineartService import ColorLineartService
from rest.services.ColorPhotoService import ColorPhotoService


class AddFilterEndpoint(Resource):

    def __init__(self):
        self.addFilterService = AddFilterService()
        super().__init__()

    def post(self):
        # payload = request.form.to_dict(flat=False)
        # im_b64 = payload['image'][0]
        # alpha = float(payload['transparency'][0])
        # color = float(payload['color'][0])
        #
        # img = cv2.cvtColor(np.array(Image.open(buf)), cv2.COLOR_RGB2BGR)
        # overlay = img.copy()
        # output = img.copy()
        # ########################################
        #
        # cv2.rectangle(overlay, (0, 0), (img.shape[0], img.shape[1]),
        #               (0, 0, 255), -1)
        # cv2.addWeighted(overlay, alpha, output, 1 - alpha,
        #                 0, output)
        # ################################################
        # img = Image.fromarray(img.astype("uint8"))
        # rawBytes = io.BytesIO()
        # img.save(rawBytes, "JPEG")
        # rawBytes.seek(0)
        # img_base64 = base64.b64encode(rawBytes.read())
        # return str(img_base64)
        pass


class ColorPhotoEndpoint(Resource):
    colorPhotoService = ColorPhotoService()

    def post(self):
        payload = request.form.to_dict(flat=False)
        im_b64 = payload['image'][0]
        return self.colorPhotoService.color_image(im_b64)




class ColorLineartEndpoint(Resource):
    colorLineartService = ColorLineartService()

    def post(self):
        payload = request.form.to_dict(flat=False)
        im_b64 = payload['image'][0]
        return self.colorLineartService.color_image(im_b64)

