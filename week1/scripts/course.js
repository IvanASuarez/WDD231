const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: false
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]

const ulCourses = document.getElementById('courses-list');
const amountOfCourses = document.getElementById('amountOfCourses');
const buttons = document.querySelectorAll('.filter-buttons button');

// 3) Render
function displayCourses(list) {
  ulCourses.innerHTML = '';

  list.forEach(course => {
    const li = document.createElement('li');
    li.textContent = `${course.subject} ${course.number} - ${course.title}`;

    if (course.completed) {
      li.style.backgroundColor = '#333333';
      li.style.color = '#ffffff';
    } else {
      li.style.backgroundColor = '#9dc5bb';
      li.style.color = '#0a2463';
    }

    ulCourses.appendChild(li);
  });

  const totalCredits = list.reduce((sum, c) => sum + (c.credits || 0), 0);
  amountOfCourses.textContent = `Courses: ${list.length} • Credits: ${totalCredits}`;
}

// 4) Filtros (¡un solo manejador!)
buttons.forEach(button => {
  button.addEventListener('click', () => {
    // activo visual
    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    const filter = button.getAttribute('data-filter'); // all | WDD | CSE
    const filtered = filter === 'all' ? courses : courses.filter(c => c.subject === filter);

    // Debug opcional si algo falla:
    // console.log({filter, filtered});

    displayCourses(filtered);
  });
});

// 5) Estado inicial
document.querySelector('[data-filter="all"]').classList.add('active');
displayCourses(courses);