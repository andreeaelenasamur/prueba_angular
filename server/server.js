const userData = require('./data/users.json');
const jsonServer = require('json-server');
const cors = require('cors');
const { filterUser } = require('./utils/filter');
const { paginateResult } = require('./utils/pagination');

const middlewares = jsonServer.defaults();

const port = 3000;

const server = jsonServer.create();

server.use(cors({
  origin: '*'
}));
server.use(middlewares);
server.use(jsonServer.bodyParser);

server.post('/api/users/list', (req, res) => {
  const { filters, currentPage, itemsPerPage } = req.body;

  const filterResult = filterUser(userData.usuarios, filters);

  res.status(200).send(paginateResult(filterResult, currentPage, itemsPerPage));
});

server.listen(port, () => {
  console.log(`Server listening on port ${port}`)
});
