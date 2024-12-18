if (this.actor.status.advantage.value && !this.actor.sameSideAs(this.effect.sourceActor))
{
    this.actor.modifyAdvantage(-1);
    this.script.scriptNotification(`${this.actor.name} perd 1 Avantage`);
}