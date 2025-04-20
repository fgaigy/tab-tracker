import client from '../db.js'

export default {
    async register (req, res) {
        try {
            const result = await client.query(
              'INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *',
              [req.body.email, req.body.password]
            )
            res.send(result.rows[0])
            //client.end()

          } catch (err) {
            //client.end()
            err // to avoid error by linting
            res.status(400).send({
                error: 'email already exists',
            })
          }
        //
    }
}