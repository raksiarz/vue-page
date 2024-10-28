import { ref, computed } from "vue"
import { getAST, getEvaluated } from "monkeylang"

export const input = ref('')

export const AST = computed(() => {
    return getAST(input.value)
})

export const evaluated = computed(() => {
    return getEvaluated(input.value)
})
