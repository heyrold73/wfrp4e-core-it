if (args.test.preData.options?.corruption && args.test.failed) {
  args.test?.result?.other.push("Reçoit 1 Point de Corruption de " + this.effect.name)
}