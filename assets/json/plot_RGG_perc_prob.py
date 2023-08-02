import plotly.express as px
import chart_studio.tools as tls

import json
import math

username = 'vinkum.br'
api_key = 'xifq7o5BhLebu3LDraoW'

e = math.e
with open("RGG_theta_lambda.json") as f:
    data = json.load(f)

lbda = data["lambda"]
theta_lambda = data["theta_lambda"]
theta_lambda_random = data["theta_lambda_random"]
theta_lambda_251 = data["theta_lambda_251"]

df={'lambda':lbda,'theta_lambda':theta_lambda}
fig = px.line(df,x='lambda',y='theta_lambda',hover_name='theta_lambda')
fig.update_layout(
    title=r'$\text{Percolation probability on a }RGG(\lambda,1)$',
    xaxis_title=r'$\lambda$',
    yaxis_title=r'$\theta(\lambda)$')
fig.show()
fig.write_html("./RGG_theta_lambda.html",include_mathjax = 'cdn')
