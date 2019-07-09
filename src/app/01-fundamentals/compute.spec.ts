import { compute } from './compute'

describe('compute', ()=>{
    it('should return 0 if input is a negatvie number', ()=>{
        const result = compute(-1)
        expect(result).toBe(0)
    })
})