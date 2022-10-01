import {ColourFrom256} from "../ColourChart";

test('colour 27 should be #005fff', () => {
    const colour = ColourFrom256(27).toHexString();
    expect(colour).toBe("#005fff");
})

test('colour 110 should be #87afd7', () => {
    const colour = ColourFrom256(110).toHexString();
    expect(colour).toBe("#87afd7");
})

test('colour 247 should be #9e9e9e', () => {
    const colour = ColourFrom256(247).toHexString();
    expect(colour).toBe("#9e9e9e");
})

test('colour 255 should be #eeeeee', () => {
    const colour = ColourFrom256(255).toHexString();
    expect(colour).toBe("#eeeeee");
})


test('colour 232 should be #080808', () => {
    const colour = ColourFrom256(232).toHexString();
    expect(colour).toBe("#080808");
})


test('colour 232 should be #ffffff', () => {
    const colour = ColourFrom256(231).toHexString();
    expect(colour).toBe("#ffffff");
})


test('colour 16 should be #000000', () => {
    const colour = ColourFrom256(16).toHexString();
    expect(colour).toBe("#000000");
})