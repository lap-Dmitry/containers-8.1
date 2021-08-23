import Character from '../character';

test('create Character name < 2', () => {
  expect(() => new Character('a', 'Bowman')).toThrowError(new Error('Имя должно быть не менее 2 и не более 10 символов'));
});

test('create Character name > 10', () => {
  expect(() => new Character('a1234567890', 'Bowman')).toThrowError(new Error('Имя должно быть не менее 2 и не более 10 символов'));
});

test('create type error ', () => {
  function CharacterExpectError() {
    return new Character('Bowman', 'Oleg');
  }
  expect(CharacterExpectError).toThrow(new Error('Тип задан неверно'));
});

test('create Character name ok', () => {
  const character = new Character('Oleg', 'Magician');
  expect(character.name).toBe('Oleg');
});

test('create Character type ok', () => {
  const character = new Character('Oleg', 'Magician');
  expect(character.type).toBe('Magician');
});

test('create Character ok', () => {
  const character = new Character('Oleg', 'Magician');
  const result = {
    name: 'Oleg',
    type: 'Magician',
    health: 100,
    level: 1,
  };
  expect(character).toMatchObject(result);
});

test('create Character levelUp 0', () => {
  const character = new Character('Oleg', 'Magician');
  character.health = 0;
  expect(() => character.levelUp()).toThrowError(new Error('Невозможно повысить уровень'));
});

test('create Character levelUp health', () => {
  const character = new Character('Oleg', 'Magician');
  character.attack = 10;
  character.defence = 10;
  character.levelUp();
  expect(character.health).toBe(100);
});

test('create Character levelUp attack', () => {
  const character = new Character('Oleg', 'Magician');
  character.attack = 10;
  character.defence = 10;
  character.levelUp();
  expect(character.attack).toBe(12);
});

test('create Character levelUp defence', () => {
  const character = new Character('Oleg', 'Magician');
  character.attack = 10;
  character.defence = 10;
  character.levelUp();
  expect(character.defence).toBe(12);
});

test('create Character levelUp ok', () => {
  const character = new Character('Oleg', 'Magician');
  character.attack = 10;
  character.defence = 10;
  character.levelUp();
  expect(character.level).toBe(2);
});

test('create Character damage', () => {
  const character = new Character('Oleg', 'Magician');
  character.defence = 10;
  character.damage(50);
  expect(character.health).toBe(55);
});

test('create Character damage high', () => {
  const character = new Character('Oleg', 'Magician');
  character.defence = 10;
  character.damage(200);
  expect(character.health).toBe(0);
});
