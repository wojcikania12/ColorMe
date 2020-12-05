from flask import Flask
from flask_restplus import Api
from rest.endpoints import AddFilterEndpoint, ColorPhotoEndpoint, ColorLineartEndpoint


def register_rest_resources(rest):
    api = Api(rest)
    api.add_resource(AddFilterEndpoint, '/filter')
    api.add_resource(ColorPhotoEndpoint, '/color/photo')
    api.add_resource(ColorLineartEndpoint, '/color/lineart')


def create_app():
    rest = Flask(__name__)
    register_rest_resources(rest)
    return rest
