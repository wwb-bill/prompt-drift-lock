# prompt-drift-lock

SHA-based prompt versioning. Lock, detect drift, rollback.

```typescript
import { PromptLocker } from "prompt-drift-lock";
const pl = new PromptLocker();
pl.lock("greet", "Hello {{name}}", "1.0.0");
pl.check("greet", "Hi {{name}}!"); // { drifted: true, diff: { added: 0, removed: 1 } }
pl.rollback("greet"); // revert to previous version
```

MIT
