import React from 'react';
import './Project.css';
import ProjectEntry from './ProjectEntry';

const _DataJson =
{
  data: [
    {
      id: 1,
      img: 'https://i.pinimg.com/originals/44/c6/3e/44c63ee13c058cdce478ae583ba349b7.jpg',
      title: 'Lebron Dunk Shot',
      date: 'Oct 2020',
      description: 'The syntax of a language is how it works. How to actually write it. Learn HTML syntax…',
      tags: ['React.js', 'Redux.js']
    },
    {
      id: 2,
      img: 'https://i.pinimg.com/originals/44/c6/3e/44c63ee13c058cdce478ae583ba349b7.jpg',
      title: 'Lebron Dunk Shot',
      date: 'Oct 2020',
      description: 'The syntax of a language is how it works. How to actually write it. Learn HTML syntax…',
      tags: ['React.js', 'Redux.js']
    },
    {
      id: 3,
      img: 'https://i.pinimg.com/originals/44/c6/3e/44c63ee13c058cdce478ae583ba349b7.jpg',
      title: 'Lebron Dunk Shot',
      date: 'Oct 2020',
      description: 'The syntax of a language is how it works. How to actually write it. Learn HTML syntax…',
      tags: ['React.js', 'Redux.js']
    }
  ]
}

function Project() {
  return (
    <section className="cards-wrapper">
      {
        _DataJson.data.map(entry => {
          return (
            <ProjectEntry data={entry} key={entry.id} />
          )
        })
      }
    </section>
  );
}

export default Project;