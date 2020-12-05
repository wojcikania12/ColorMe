from flask import request
from flask_cors import cross_origin
from flask_restplus import Resource
from rest.services.AddFilterService import AddFilterService
from rest.services.ColorLineartService import ColorLineartService
from rest.services.ColorPhotoService import ColorPhotoService


class AddFilterEndpoint(Resource):
    addFilterService = AddFilterService()

    @cross_origin()
    def post(self):
        payload = request.form.to_dict(flat=False)
        im_b64 = payload['image'][0]
        transparency = float(payload['transparency'][0])
        color = payload['color'][0]
        return self.addFilterService.put_filters_on_image(im_b64, color, transparency).decode()


class ColorPhotoEndpoint(Resource):
    colorPhotoService = ColorPhotoService()

    @cross_origin()
    def post(self):
        payload = request.form.to_dict(flat=False)
        im_b64 = payload['image'][0]
        return self.colorPhotoService.color_image(im_b64).decode()


class ColorLineartEndpoint(Resource):
    colorLineartService = ColorLineartService()

    @cross_origin()
    def post(self):
        payload = request.form.to_dict(flat=False)
        im_b64 = payload['image'][0]
        return self.colorLineartService.color_image(im_b64).decode()

