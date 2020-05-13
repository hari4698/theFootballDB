import nextConnect from 'next-connect';
import middleware from '../../server/database';

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {

  const { name } = req.query;

  let doc = {}

  if (name) {
    doc = await req.db.collection('teams').findOne({ name })
  }
  else {
    doc = await req.db.collection('teams').findOne()
  }

  console.log(doc);
  res.json(doc);
});

export default handler;