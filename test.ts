import { LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("this-breaks-swc")
export class Test extends LitElement {
	static anyStatic: 1;

	anyFunction = () => {
		return 1 as number;
	};
}
