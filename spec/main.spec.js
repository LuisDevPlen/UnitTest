const isValidISBN10 = require('../main');

describe('isValidISBN10', function() {

    // 1. Teste para um ISBN-10 válido sem hífens
    it('deve retornar verdadeiro para um ISBN-10 válido sem hífens', function() {
        expect(isValidISBN10('1234567890')).toBe(true);
    });

    // 2. Teste para um ISBN-10 válido com hífens
    it('deve retornar verdadeiro para um ISBN-10 válido com hífens', function() {
        expect(isValidISBN10('1-234-56789-0')).toBe(true);
    });

    // 3. Teste para ISBN-10 com comprimento incorreto (menor que 10 dígitos)
    it('deve retornar falso para um ISBN-10 com menos de 10 dígitos', function() {
        expect(isValidISBN10('12345678')).toBe(false);
    });

    // 4. Teste para ISBN-10 com comprimento incorreto (maior que 10 dígitos)
    it('deve retornar falso para um ISBN-10 com mais de 10 dígitos', function() {
        expect(isValidISBN10('12345678901')).toBe(false);
    });

    // 5. Teste para ISBN-10 com caracteres inválidos (não numéricos ou X)
    it('deve retornar falso para um ISBN-10 com caracteres inválidos', function() {
        expect(isValidISBN10('12345X7890')).toBe(false);
        expect(isValidISBN10('12345678Z0')).toBe(false);
    });

    // 6. Teste para ISBN-10 com o checksum incorreto
    it('deve retornar falso para um ISBN-10 com um checksum incorreto', function() {
        expect(isValidISBN10('1234567891')).toBe(false);
    });

    // 7. Teste para ISBN-10 com o último caractere válido
    it('deve retornar verdadeiro para um ISBN-10 onde o último caractere é X (checksum válido)', function() {
        expect(isValidISBN10('123456789X')).toBe(true);  // X representa 10 e é válido
    });

    // 8. Teste para ISBN-10 onde o último caractere não é X e não é um número válido
    it('deve retornar falso para um ISBN-10 onde o último caractere não é válido', function() {
        expect(isValidISBN10('1234567897')).toBe(false);  // 7 não é um checksum válido
    });

    // 9. Teste para ISBN-10 com x minúsculo
    it('deve tratar ISBN-10 com x minúsculo corretamente', function() {
        expect(isValidISBN10('123456789x')).toBe(true);  // x é tratado como 10
    });

    // 10. Teste para string vazia
    it('deve retornar falso para uma string vazia', function() {
        expect(isValidISBN10('')).toBe(false);
    });

    // 11. Teste para ISBN-10 com caracteres não numéricos
    it('deve retornar falso para um ISBN-10 com caracteres não numéricos', function() {
        expect(isValidISBN10('abcdefghij')).toBe(false);
    });

    // 12. Teste para ISBN-10 com hífens misturados
    it('deve retornar verdadeiro para um ISBN-10 válido com colocação mista de hífens', function() {
        expect(isValidISBN10('1-23-456789-0')).toBe(true);  // Válido com hífens misturados
    });

    // 13. Teste para ISBN-10 com espaços ao redor dos hífens
    it('deve retornar falso para um ISBN-10 válido com espaços ao redor dos hífens', function() {
        expect(isValidISBN10('1 234 56789 0')).toBe(false);  // Espaços ao redor dos números não são permitidos
    });

    // 14. Teste para ISBN-10 com espaços dentro dos números
    it('deve retornar falso para um ISBN-10 com espaços dentro dos números', function() {
        expect(isValidISBN10('1234 567 890')).toBe(false);  // Espaços dentro dos números são inválidos
    });
});
