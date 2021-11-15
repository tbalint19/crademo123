const getIdModule = (() => {
    let id = 1
    const getId = () => {
        id++
        return id
    }
    return { getId }
  })()

  export const getId = getIdModule.getId

