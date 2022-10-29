const express = require('express');

const app = express();

app.use(express.json());

const teams = [
  {
    id: 1,
    name: 'São Paulo Futebol Clube',
    initials: 'SPF',
  },
  {
    id: 2,
    name: 'Clube Atlético Mineiro',
    initials: 'CAM',
  },
  {
    id: 3,
    name: 'Fluminense Futebol Clube',
    initials: 'FLU',
  },
];

/* app.get('/teams', (req, res) => res.status(200).json({ teams }));

app.post('/teams', (req, res) => {
  const newTeam = { ...req.body };
  teams.push(newTeam);

  res.status(201).json({ team: newTeam });
}); */

/* app.put('/teams/:id', (req, res) => {
  const { id } = req.params;
  const { name, initials } = req.body;

  const toUpdateTeam = teams.find((team) => team.id === Number(id));
  if (!toUpdateTeam) res.status(404).json({ message: 'Team not found' });

  toUpdateTeam.name = name;
  toUpdateTeam.initials = initials;
  res.status(200).json({ toUpdateTeam });
}); */

app.delete('/teams/:id', (req, res) => {
  const { id } = req.params;
  const arrayIndex = teams.findIndex((team) => team.id === Number(id));
  teams.splice(arrayIndex, 1);

  res.status(200).end();
});

module.exports = app;
