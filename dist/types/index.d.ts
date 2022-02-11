import { NodePlopAPI } from "node-plop";
export interface GeneratorConfig {
	createIndex: boolean;
	functional: boolean;
	basePath: string;
	withClassnameInterfaceImportPath: string;
	withStyleInterfaceImportPath: string;
	tests: boolean;
	stories: boolean;
	styledComponents: boolean;
	useNative: boolean;
	useMacro: boolean;
	templateIndex?: string;
	templateStory?: string;
	templateStyles?: string;
	templateTest?: string;
	templateComponentFunctional?: string;
	templateComponentClassBased?: string;
}
declare const generator: (
	plop: NodePlopAPI,
	config: Partial<GeneratorConfig>
) => void;
export default generator;
