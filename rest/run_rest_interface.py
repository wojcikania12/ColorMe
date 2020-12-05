from rest import create_app

rest = create_app()


if __name__ == '__main__':
    rest.run(host="0.0.0.0", port=5000)
