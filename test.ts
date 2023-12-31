import { assertEquals } from "https://deno.land/std@0.196.0/assert/mod.ts";
import { abbreviateNumber } from "./mod.ts";

Deno.test("works", () => {
  assertEquals(abbreviateNumber(0), "0");
  assertEquals(abbreviateNumber(0.09), "0.0");
  assertEquals(abbreviateNumber(0.9), "0.9");
  assertEquals(abbreviateNumber(0.99), "0.9");
  assertEquals(abbreviateNumber(1), "1");
  assertEquals(abbreviateNumber(1.9), "1.9");
  assertEquals(abbreviateNumber(1.99), "1.9");
  assertEquals(abbreviateNumber(19), "19");
  assertEquals(abbreviateNumber(199), "199");
  assertEquals(abbreviateNumber(200), "200");
  assertEquals(abbreviateNumber(1999), "1.9k");
  assertEquals(abbreviateNumber(2000), "2.0k");
  assertEquals(abbreviateNumber(19999), "19k");
  assertEquals(abbreviateNumber(20000), "20k");
  assertEquals(abbreviateNumber(199999), "199k");
  assertEquals(abbreviateNumber(1999999), "1.9M");
  assertEquals(abbreviateNumber(19999999), "19M");
  assertEquals(abbreviateNumber(199999999), "199M");
  assertEquals(abbreviateNumber(1999999999), "1.9G");
  assertEquals(abbreviateNumber(19999999999), "19G");
  assertEquals(abbreviateNumber(199999999999), "199G");
  assertEquals(abbreviateNumber(1999999999999), "1999G");

  assertEquals(abbreviateNumber(-0), "0");
  assertEquals(abbreviateNumber(-0.09), "-0.0");
  assertEquals(abbreviateNumber(-0.9), "-0.9");
  assertEquals(abbreviateNumber(-0.99), "-0.9");
  assertEquals(abbreviateNumber(-1), "-1");
  assertEquals(abbreviateNumber(-1.9), "-1.9");
  assertEquals(abbreviateNumber(-1.99), "-1.9");
  assertEquals(abbreviateNumber(-19), "-19");
  assertEquals(abbreviateNumber(-199), "-199");
  assertEquals(abbreviateNumber(-200), "-200");
  assertEquals(abbreviateNumber(-1999), "-1.9k");
  assertEquals(abbreviateNumber(-2000), "-2.0k");
  assertEquals(abbreviateNumber(-19999), "-19k");
  assertEquals(abbreviateNumber(-20000), "-20k");
  assertEquals(abbreviateNumber(-199999), "-199k");
  assertEquals(abbreviateNumber(-1999999), "-1.9M");
  assertEquals(abbreviateNumber(-19999999), "-19M");
  assertEquals(abbreviateNumber(-199999999), "-199M");
  assertEquals(abbreviateNumber(-1999999999), "-1.9G");
  assertEquals(abbreviateNumber(-19999999999), "-19G");
  assertEquals(abbreviateNumber(-199999999999), "-199G");
  assertEquals(abbreviateNumber(-1999999999999), "-1999G");
});

Deno.test("custom suffixes", () => {
  assertEquals(abbreviateNumber(2000, { suffixes: ["x"] }), "2.0x");
});

Deno.test("undefined options", () => {
  assertEquals(abbreviateNumber(2000, { suffixes: undefined }), "2.0k");
});
