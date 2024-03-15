import pandas
import plotly.express as px
data = pandas.read_csv("data-example2.csv")
fig = px.scatter_ternary(data, a='Mn', b='Fe', c='Co', color=data['Property'], size_max=20)
fig.update_layout(font=dict(size=18))
fig.show()

# 1. finish python install
# 2. line r 3 I have to give the relative path of the csv file thati want to render
# 3. pipx install plotly pandas packaging
# this will install those libraries necessary for the renderisation 

# The python requirements are

# - plotly
# - pandas
# - packaging

# run python render.py

# sin el run, el terminal tiene que estar aqui para qe el python fncione
# (myenv) (named) nouser@nousers-MBP experimental % 