import unittest
from rest.run_rest_interface import rest
from .tests_data import *


class MyTestCase(unittest.TestCase):
    def setUp(self):
        self.client = rest.test_client()

    def test_color_lineart_endpoint(self):
        response = self.client.post(
            '/color/lineart',
            data={'image': base64})
        self.assertEqual(200, response.status_code)

    def test_color_photo_endpoint(self):
        response = self.client.post(
            '/color/photo',
            data={'image': base64})
        self.assertEqual(200, response.status_code)

    def test_add_filter_endpoint(self):
        response = self.client.post(
            '/color/lineart',
            data={'image': base64, "transparency": transparency, "color": color})
        self.assertEqual(200, response.status_code)


if __name__ == '__main__':
    unittest.main()
