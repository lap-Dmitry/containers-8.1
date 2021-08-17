import Team from '../app';
import Character from '../character';

test('add 1 team', () => {
  const team = new Team();
  const person1 = new Character('Person1', 'Bowman');
  team.add(person1);
  expect(team.members).toContain(person1);
  expect(team.members.size).toBe(1);
});

test('add non-unique', () => {
  const team = new Team();
  const person1 = new Character('Person1', 'Bowman');
  team.add(person1);
  expect(() => team.add(person1)).toThrowError();
});

test('add all 4 teamets', () => {
  const team = new Team();
  const person1 = new Character('Person1', 'Bowman');
  const person2 = new Character('Person2', 'Swordsman');
  const person3 = new Character('Person3', 'Magician');
  const person4 = new Character('Person4', 'Daemon');
  team.addAll(person1, person2, person3, person4);
  expect(team.members).toContain(person1, person2, person3, person4);
  expect(team.members.size).toBe(4);
});

test('add all unique teamets', () => {
  const team = new Team();
  const person1 = new Character('Person1', 'Bowman');
  const person2 = new Character('Person2', 'Swordsman');
  const person3 = new Character('Person3', 'Magician');
  const person4 = new Character('Person4', 'Daemon');
  team.add(person1);
  team.add(person2);
  expect(team.members.size).toBe(2);
  team.addAll(person1, person2, person3, person4);
  expect(team.members).toContain(person1, person2, person3, person4);
  expect(team.members.size).toBe(4);
});

test('members to Array', () => {
  const team = new Team();
  const person1 = new Character('Person1', 'Bowman');
  const person2 = new Character('Person2', 'Swordsman');
  const person3 = new Character('Person3', 'Magician');
  const person4 = new Character('Person4', 'Daemon');
  team.addAll(person1, person2, person3, person4);
  const arr = team.toArray();
  expect(arr).toEqual([person1, person2, person3, person4]);
});
