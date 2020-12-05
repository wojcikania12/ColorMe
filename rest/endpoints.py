from flask import request
from flask_restplus import Resource


from rest.services.AddFilterService import AddFilterService
from rest.services.ColorLineartService import ColorLineartService
from rest.services.ColorPhotoService import ColorPhotoService


class AddFilterEndpoint(Resource):
    addFilterService = AddFilterService()

    def post(self):
        payload = request.form.to_dict(flat=False)
        im_b64 = payload['image'][0]
        transparency = float(payload['transparency'][0])
        color = payload['color'][0]
        return self.addFilterService.put_filters_on_image(im_b64, color, transparency)


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

