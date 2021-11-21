import { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    return handlePost(req, res)
  }

  return handleGet(req, res)
}

interface PageEntry {
  id: string
  time: string
  messaging: Array<any>
}

function handlePost(req: NextApiRequest, res: NextApiResponse) {
  const { body } = req

  // Checks this is an event from a page subscription
  if (body.object === 'page') {
    // Iterates over each entry - there may be multiple if batched
    body.entry.forEach((entry: PageEntry) => {
      // Gets the message. entry.messaging is an array, but
      // will only ever contain one message, so we get index 0
      const webhookEvent = entry.messaging[0]
      console.log(webhookEvent)
    })

    // Returns a '200 OK' response to all requests
    res.status(200).send('EVENT_RECEIVED')
  } else {
    // Returns a '404 Not Found' if event is not from a page subscription
    res.status(404)
  }
  return res.send(req.query.word)
}

function handleGet(req: NextApiRequest, res: NextApiResponse) {
  return res.send(req.query.word)
}
