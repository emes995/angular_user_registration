import argparse

from aiohttp import web
from aiohttp.web import RouteTableDef

if __name__ == '__main__':

  ap = argparse.ArgumentParser().add_argument('-p', '--port')

  routes: RouteTableDef = web.RouteTableDef()

  @routes.get('/properties')
  async def _get(request):
    return web.json_response({'properties':
                              [{'name': 'One', 'address': '123 First Ave'},
                               {'name': 'Two', 'address': '234 Second Ave'}
                               ]})

  app = web.Application()
  app.add_routes(routes)
  web.run_app(app=app)
