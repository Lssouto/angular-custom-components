export const makeModifiers = (modifiers, name) => {
    return modifiers.reduce(
        (_name, _modifier) =>
            `${_name} ${name}--${_modifier}`, `${name}`);
}

export const addModifiers = (modifiers, newModifiers) => {
    if (Array.isArray(newModifiers)) {
        return [
          ...modifiers,
          ...newModifiers.filter(value => !!value)
        ]
    }
    
    return modifiers;
}