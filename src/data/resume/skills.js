// TODO: Add Athletic Skills, Office Skills,
// Data Engineering, Data Science, ML Engineering, ... ?

const skills = [
  {
    title: 'C/C++',
    competency: 4,
    category: ['Languages', 'Software Development', 'Embedded'],
  },
  {
    title: 'STM32/Arduino/ESP32',
    competency: 5,
    category: ['Embedded'],
  },
  {
    title: 'Python',
    competency: 4,
    category: ['Languages', 'Software Development'],
  },
  {
    title: 'VHDL',
    competency: 3,
    category: ['Languages', 'Hardware'],
  },
  {
    title: 'Cadance Virtuoso',
    competency: 2,
    category: ['Simulation', 'Hardware', 'Physics'],
  },
  {
    title: 'STM32 Cube IDE',
    competency: 5,
    category: ['Software Development', 'Embedded'],
  },
  {
    title: 'PlatformIO',
    competency: 4,
    category: ['Software Development', 'Embedded'],
  },
  {
    title: 'Comsol',
    competency: 1,
    category: ['Simulation', 'Physics'],
  },
  {
    title: 'Keil',
    competency: 3,
    category: ['Software Development', 'Embedded'],
  },
  {
    title: 'Transistor level design',
    competency: 2,
    category: ['Hardware', 'Physics'],
  },
  {
    title: 'MatLab',
    competency: 3,
    category: ['Languages', 'Software Development'],
  },
  {
    title: 'Proteus',
    competency: 3,
    category: ['Electronics', 'Simulation'],
  },
  {
    title: 'KiCAD',
    competency: 5,
    category: ['Electronics'],
  },
  {
    title: 'AutoDesk',
    competency: 5,
    category: ['3DPrinting', 'Simulation'],
  },
  {
    title: 'Partquest',
    competency: 3,
    category: ['Simulation', 'Electronics'],
  },
  {
    title: '8051 Assembly',
    competency: 2,
    category: ['Languages', 'Embedded'],
  },
  {
    title: 'RISC-V Architecture',
    competency: 3,
    category: ['Hardware'],
  },
  {
    title: 'Logisim',
    competency: 3,
    category: ['Simulation', 'Hardware'],
  },
  {
    title: 'ModelSim',
    competency: 3,
    category: ['Simulation', 'Hardware'],
  },
  {
    title: 'Cura',
    competency: 5,
    category: ['3DPrinting'],
  },
  {
    title: 'French',
    competency: 5,
    category: ['Linguistics'],
  },
  {
    title: 'English',
    competency: 5,
    category: ['Linguistics'],
  },
  {
    title: 'Spanish',
    competency: 2,
    category: ['Linguistics'],
  },
  {
    title: 'Chinese (Mandarin)',
    competency: 1,
    category: ['Linguistics'],
  },
  {
    title: 'Analogic/Digital Electronics',
    competency: 4,
    category: ['Physics'],
  },
  {
    title: 'Vivado',
    competency: 2,
    category: ['Physics', 'Simulation', 'Hardware'],
  },
  ].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be == to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [
  ...new Set(skills.reduce((acc, { category }) => acc.concat(category), [])),
]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
