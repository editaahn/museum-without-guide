import time
from flask import Flask, request, jsonify, current_app
from sqlalchemy import create_engine, text


def create_app(test_config=None):  # 1)
    app = Flask(__name__)

    #app.json_encoder = CustomJSONEncoder

    if test_config is None:  # 2)
        app.config.from_pyfile("config.py")
    else:
        app.config.update(test_config)

    database = create_engine(
        app.config['DB_URL'], encoding='utf-8', max_overflow=0)  # 3)c
    app.database = database  # 4)

    @app.route('/museumlist', methods=['GET'])
    def send_museum_list():
        rows = app.database.execute(text("""
                SELECT 
                    m.museum_id, m.museum_name, m.city
                FROM museum m
            """), {}).fetchall()

        museums = []

        for row in rows:
            museums.append({'museum_id': row.museum_id,
                            'museum_name': row.museum_name, 'city': row.city})

        return jsonify(museums)

    def get_room_list(floorId):
        rows = app.database.execute(text("""
                SELECT 
                    r.room_id, r.coordinate
                FROM room r
                WHERE r.floor_id = :floorId
            """), {'floorId': floorId}).fetchall()

        rooms = []

        for row in rows:
            rooms.append(
                {'room_id': row.room_id, 'coordinate': row.coordinate})

        return rooms

    @app.route('/museum/<museumId>', methods=['GET'])
    def send_museum_info(museumId):
        row = app.database.execute(text("""			# 1)
                SELECT
                    m.museum_id, m.museum_name, m.city, m.opening_hours
                FROM museum m
                WHERE m.museum_id = :museumId
            """), {'museumId': museumId}).fetchone()

        floors = app.database.execute(text("""			# 1)
                SELECT
                    f.floor_id, f.floor_num, f.floor_map_img
                FROM floor f
                WHERE f.museum_id = :museumId
            """), {'museumId': museumId}).fetchall()

        museumInfo = {
            'museum_id': row.museum_id,
            'museum_name': row.museum_name,
            'city': row.city,
            'opening_hours': row.opening_hours,
            'floors': []
        }

        for f in floors:
            floorInfo = {'floor_id': f.floor_id, 'floor_num': f.floor_num,
                         'floor_map_img': f.floor_map_img, 'rooms': []}
            floorInfo['rooms'] = get_room_list(f.floor_id)
            museumInfo['floors'].append(floorInfo)

        return jsonify(museumInfo)

    @app.route('/room/<roomId>', methods=['GET'])
    def send_room_artworks(roomId):
        rows = app.database.execute(text("""			# 1)
                SELECT
                    a.artwork_id, a.title, a.artist, a.title, a.recommendation, a.img
                FROM artwork a
                WHERE a.room_id = :roomId
            """), {'roomId': roomId}).fetchall()

        artworks = []

        for art in rows:
            artworkInfo = {'artwork_id': art.artwork_id, 'title': art.title, 'artist': art.artist, 
                           'recommendation': art.recommendation, 'img': art.img}
            artworks.append(artworkInfo)
        
        print(artworks)

        return jsonify(artworks)


    return app  # 5)


create_app()
