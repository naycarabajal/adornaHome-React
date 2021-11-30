const Counter = (count) => {
    return (
        <button onclick={() => incrementar(count)}>{incrementar}</button>
    )
}

const incrementar = (count) => {
    count.setTitle({
      count: count + 1
    })
  }

export default Counter