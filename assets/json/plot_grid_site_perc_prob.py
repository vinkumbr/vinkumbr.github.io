import plotly.express as px
import chart_studio.tools as tls

import json
import math

e = math.e
with open("theta_thetaplus.json") as f:
	data = json.load(f)

p = data["p"]
thetap = data["thetap"]
thetapext = [thetap[i]/p[i] for i in range(len(p))]
print(len(p),len(thetap))

df={'p':p,'theta(p)':thetap}
fig = px.line(df,x='p',y='theta(p)',hover_name='theta(p)')
fig.update_layout(
    title=r'$\text{Percolation probability on a grid}$',
    xaxis_title=r'$p$',
    yaxis_title=r'$\theta(p)$')
fig.show()
fig.write_html("./grid_theta_site_perc.html",include_mathjax = 'cdn')
