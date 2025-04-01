Search.setIndex({"docnames": ["PiximiConverter", "annotation-guide", "citing-piximi", "classification", "classify-example-eukaryotic-image", "create-cell-crops-with-cellprofiler", "example-datasets", "hyperparameters", "intro", "main-menu", "measurements", "segmentation", "technical-faq", "work-in-progress"], "filenames": ["PiximiConverter.ipynb", "annotation-guide.md", "citing-piximi.md", "classification.md", "classify-example-eukaryotic-image.md", "create-cell-crops-with-cellprofiler.md", "example-datasets.md", "hyperparameters.md", "intro.md", "main-menu.md", "measurements.md", "segmentation.md", "technical-faq.md", "work-in-progress.md"], "titles": ["How to convert a Piximi classification model for use outside Piximi", "The Annotator", "Citing Piximi", "Classification", "Image Classification", "Create cell crops with CellProfiler", "Example datasets", "Hyperparameters", "Images to Discovery", "Main menu (left)", "Measurements", "Segmentation", "Technical FAQ", "Known issues"], "terms": {"an": [0, 2, 5, 6, 7, 8, 10, 11, 12], "obviou": 0, "downsid": 0, "your": [0, 1, 4, 5, 7, 8, 9, 11, 12], "analysi": [0, 9, 11], "browser": [0, 8, 9, 11, 12], "amount": 0, "data": [0, 6, 7, 8, 11, 12], "ar": [0, 4, 5, 6, 7, 8, 9, 10, 11], "need": [0, 4, 8, 12], "all": [0, 7, 12], "fit": [0, 4, 12], "now": [0, 4, 5, 10], "might": [0, 12], "therefor": [0, 7], "choos": [0, 5, 7, 11], "train": [0, 7, 8, 11, 13], "classifi": [0, 4, 5, 10], "subset": [0, 4, 6, 7], "export": [0, 6], "elsewher": 0, "The": [0, 4, 5, 6, 7, 11, 12], "notebook": 0, "can": [0, 1, 4, 5, 7, 8, 9, 11, 13], "file": [0, 5, 9, 12], "python": 0, "happi": 0, "input_json_nam": 0, "bbbc013nocropyesrescal": 0, "simplecnn": [0, 12], "json": [0, 12], "name": [0, 5], "needs_convers": 0, "fals": 0, "do": [0, 4, 7, 9], "creat": [0, 1, 8, 9], "compat": 0, "h5": 0, "have": [0, 4, 7, 8, 9], "alreadi": [0, 4], "so": [0, 5, 7, 12], "should_rescal": 0, "true": 0, "should": [0, 7], "min": 0, "max": [0, 12], "rescal": 0, "befor": [0, 5, 7, 12], "infer": [0, 11], "output_h5_nam": 0, "want": [0, 10], "kera": 0, "files_to_run": 0, "piximiconvertunrescaled2chan": 0, "tiff": 0, "A": [0, 2, 7, 11, 12], "glob": 0, "pass": 0, "find": [0, 4, 8, 10], "return_named_list": 0, "return": 0, "list": 0, "class": [0, 7, 8, 10, 11], "rather": [0, 4], "than": [0, 4, 6], "arrai": 0, "requir": [0, 7, 8, 12], "set": [0, 4, 5, 7, 8, 9, 12], "class_label": 0, "cytoplasmicgfp": 0, "nogfp": 0, "nucleargfp": 0, "label": [0, 4, 6], "order": [0, 8], "Not": 0, "return_name_list": 0, "pip": 0, "instal": [0, 8], "tensorflowj": 0, "skimag": 0, "import": [0, 8, 9], "tf": 0, "numpi": 0, "tensorflowjs_convert": 0, "input_format": 0, "tfjs_layers_model": 0, "output_format": 0, "piximi_model": 0, "load_model": 0, "summari": 0, "def": 0, "load_imag": 0, "imnam": 0, "reorder": 0, "inputdim": 0, "im": 0, "util": 0, "img_as_float": 0, "io": 0, "imread": 0, "moveaxi": 0, "0": [0, 4, 5, 7], "1": [0, 6, 7, 12], "exposur": 0, "rescale_intens": 0, "newim": 0, "zero": 0, "shape": [0, 10, 11], "ch": 0, "rang": [0, 7, 8], "transform": 0, "resize_local_mean": 0, "2": [0, 6, 7, 12], "3": [0, 6, 7, 12], "prepare_for_classif": 0, "image_list": 0, "loaded_model": 0, "imlist": 0, "dim": 0, "input_shap": 0, "resiz": [0, 1], "each": [0, 5, 6, 7, 11], "one": [0, 1, 7, 9], "after": [0, 5, 12], "becaus": 0, "weird": 0, "behavior": 0, "happen": 0, "append": 0, "return_classif": 0, "list_of_class_nam": 0, "prediction_arrai": 0, "probabl": 0, "predict": [0, 7, 8, 11], "argmax": 0, "axi": 0, "class_name_dict": 0, "index": 0, "x": 0, "vector": 0, "get": [0, 4, 7, 9, 11], "recurs": 0, "sort": 0, "print": 0, "count": 0, "els": 0, "uniqu": [0, 11], "return_count": 0, "len": 0, "f": 0, "piximi": [1, 4, 5, 6, 7, 9, 10, 11, 13], "quickli": [1, 11], "multichannel": [1, 5, 8], "multiplan": [1, 8], "imag": [1, 2, 3, 6, 7, 9, 10, 12], "below": [1, 5, 6, 7], "showcas": 1, "some": [1, 7, 9], "differ": [1, 6, 7, 9, 11], "tool": [1, 2, 8, 9], "offer": [1, 7, 8], "varieti": [1, 8], "wai": [1, 7, 8, 12], "make": [1, 7, 8, 12], "furthermor": 1, "select": [1, 4, 5, 8, 11, 12], "enabl": [1, 5, 12], "user": [1, 7, 8, 11, 12], "delet": [1, 12], "specif": [1, 4, 8, 11, 12], "ad": [1, 8], "togeth": 1, "from": [1, 4, 5, 6, 7, 8, 9, 10, 11], "anoth": [1, 4, 9], "two": [1, 4, 5, 10, 12], "aka": 1, "superpixel": 1, "If": [2, 4, 5, 6, 7, 8], "you": [2, 4, 5, 6, 7, 8, 9, 11, 12, 13], "us": [2, 4, 6, 7, 8, 9, 11, 13], "thi": [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], "softwar": [2, 9], "pleas": [2, 6, 8, 12], "moser": 2, "lm": 2, "gogoberidz": 2, "n": [2, 5], "papaleo": 2, "luca": 2, "dao": 2, "d": [2, 7], "friedrich": 2, "ca": 2, "paavolainen": 2, "l": 2, "molnar": 2, "c": 2, "stirl": 2, "dr": 2, "hung": 2, "j": [2, 6], "wang": 2, "r": 2, "troman": 2, "coia": 2, "li": 2, "b": [2, 6], "evan": 2, "el": 2, "eliceiri": 2, "kw": 2, "horvath": 2, "p": [2, 5], "carpent": 2, "ae": 2, "cimini": 2, "ba": 2, "discoveri": 2, "web": 2, "bioimag": [2, 5, 6], "beyond": 2, "biorxiv": 2, "2024": [2, 6], "doi": [2, 6], "10": [2, 5, 6], "1101": 2, "06": 2, "03": [2, 7], "597232v1": 2, "come": [3, 10], "soon": 3, "see": [3, 4, 7, 8], "our": [3, 7, 8], "tutori": [3, 8], "object": [3, 5, 9, 10, 11], "more": [3, 4, 7, 8, 10], "inform": [3, 5, 7, 8, 12], "we": [3, 4, 5, 6, 7, 8, 10, 11, 12], "build": 3, "out": [3, 7, 9, 10], "page": [3, 4], "To": [4, 5, 9, 11, 12], "begin": [4, 5, 11], "exampl": [4, 5, 7, 8, 9, 11, 12, 13], "dataset": [4, 5, 11, 12], "includ": [4, 6, 8, 11, 12, 13], "press": [4, 11, 12], "open": [4, 5, 8, 9, 11, 12], "top": [4, 10, 11], "left": [4, 11], "project": [4, 5, 9, 11, 13], "human": [4, 5, 11], "u2o": [4, 5, 11], "cell": [4, 8, 11], "start": [4, 7, 8, 11], "altern": [4, 9, 11], "would": [4, 7, 8, 11, 13], "like": [4, 6, 7, 8, 11, 13], "own": [4, 7, 11], "go": [4, 10, 12], "new": [4, 9, 12], "correspond": [4, 11], "co": 4, "express": [4, 5, 6], "arrestin": [4, 6], "gfp": [4, 5, 6], "orphan": [4, 6], "gpcr": [4, 6], "upon": [4, 8], "receptor": 4, "stimul": [4, 6], "recruit": [4, 6], "plasma": [4, 6], "membran": [4, 6], "eventu": [4, 6], "endocytos": [4, 6], "result": [4, 5, 6, 7], "vesicl": [4, 6], "structur": [4, 6], "In": [4, 5, 6, 7, 8, 11], "categori": [4, 8, 9, 10], "sub": [4, 5, 11], "menu": [4, 11], "hand": [4, 11], "side": [4, 11], "defin": [4, 5, 7, 8], "turn": [4, 7, 12], "off": 4, "displai": [4, 12], "under": [4, 5], "given": [4, 7, 12], "click": [4, 5, 7, 8, 11], "filter": 4, "icon": [4, 10], "right": [4, 5, 10, 11], "panel": 4, "toggl": 4, "interest": 4, "By": [4, 5, 8], "unknown": 4, "repres": [4, 5], "uncategor": [4, 8], "which": [4, 5, 6, 7, 8, 10, 12], "belong": [4, 8], "later": [4, 9, 12], "posit": 4, "control": [4, 7], "vesicular": 4, "neg": 4, "cytoplasm": [4, 5], "explor": [4, 7, 9, 13], "particular": [4, 7, 8], "show": 4, "hide": 4, "onli": [4, 11, 12], "those": [4, 7], "ensur": 4, "current": [4, 8, 11, 12, 13], "deselect": 4, "Then": [4, 5, 11], "singl": [4, 5, 6], "best": [4, 7], "onc": [4, 9, 12], "same": [4, 5], "button": [4, 11], "learn": [4, 6, 8, 9, 10, 11], "task": [4, 11], "proce": 4, "custom": 4, "within": [4, 5, 7, 8], "variou": [4, 7], "paramet": [4, 5, 12], "adjust": [4, 5, 7], "percentag": 4, "field": [4, 5], "valu": [4, 7], "fraction": 4, "annot": [4, 5, 9, 11, 12], "remaind": 4, "test": [4, 5], "how": [4, 5, 13], "well": [4, 7, 12], "previous": [4, 5, 9, 12], "seen": 4, "default": [4, 5], "look": [4, 7, 8, 12], "try": [4, 9, 13], "link": [4, 7, 8], "input": [4, 5, 8], "appli": [4, 8, 11], "ha": [4, 5, 7], "examin": [4, 8], "compar": [4, 7], "answer": 4, "At": [4, 7], "bottom": 4, "graph": 4, "updat": 4, "loss": [4, 12], "over": [4, 12], "increment": 4, "histori": 4, "success": 4, "measur": [4, 7, 8, 11], "mani": [4, 7], "time": [4, 7, 10], "entir": [4, 5, 7, 8, 12], "studi": [4, 7], "deep": [4, 7, 8], "As": [4, 7], "number": [4, 7, 8, 12], "increas": [4, 7], "optim": [4, 12], "itself": [4, 7], "improv": [4, 7], "perform": [4, 7, 12], "howev": [4, 7, 12], "doe": 4, "necessarili": [4, 7], "lead": [4, 7], "better": [4, 7], "instead": [4, 5, 7], "overfit": [4, 7], "here": [4, 5, 7, 8], "read": [4, 7], "about": [4, 7, 9, 10], "calcul": [4, 7], "ratio": 4, "between": [4, 6, 7], "correct": [4, 7], "total": 4, "case": 4, "refer": 4, "correctli": 4, "determin": [4, 7, 8], "frac": 4, "text": [4, 5], "when": [4, 6, 7, 9, 12], "notic": 4, "decreas": 4, "continu": [4, 9], "mean": [4, 7], "lose": [4, 12], "abil": 4, "accur": 4, "pick": 4, "up": [4, 12], "featur": [4, 8], "nois": 4, "relev": 4, "essenc": [4, 7], "memor": 4, "question": 4, "scratch": 4, "metric": [4, 12], "depict": 4, "respect": 4, "summat": 4, "error": [4, 7], "made": [4, 5, 7, 8, 12], "dure": [4, 7, 8, 9, 12], "exit": 4, "dialog": [4, 12], "been": [4, 5, 7, 8, 12], "evalu": [4, 12], "depth": [4, 7], "run": [4, 8], "unannot": 4, "color": [4, 5], "thumbnail": 4, "stage": [4, 8], "mai": [4, 7, 12], "inspect": 4, "either": [4, 5, 6], "accept": 4, "hold": 4, "reject": 4, "them": [4, 7, 9, 12], "clear": 4, "depend": 4, "further": 4, "base": [4, 5, 8], "desir": [4, 5, 7], "bbbc016": [4, 6], "licens": [4, 5, 6], "creativ": [4, 5], "common": [4, 5, 9], "attribut": [4, 5], "unport": [4, 5], "ilya": [4, 5, 6], "ravkin": [4, 5, 6], "while": [5, 6, 10, 11], "possibl": [5, 7], "segment": [5, 8, 9, 12], "also": [5, 6, 8, 9, 12, 13], "individu": 5, "categor": [5, 8], "guid": [5, 7], "explain": 5, "first": [5, 8, 12], "identifi": [5, 11], "nuclei": [5, 8, 11], "modul": [5, 11], "follow": 5, "identif": 5, "rgb": 5, "dna": [5, 6], "blue": 5, "green": 5, "final": [5, 9, 12], "were": [5, 6, 7, 12], "workflow": 5, "bbbc013": [5, 6], "nucleu": [5, 6], "transloc": 5, "broad": [5, 6, 10], "benchmark": [5, 6], "collect": [5, 6], "download": [5, 12], "version": [5, 6], "For": [5, 7, 8, 12], "drag": [5, 9], "drop": [5, 9], "next": [5, 7], "appropri": 5, "rule": 5, "namesandtyp": 5, "contain": [5, 6, 12], "channel2": 5, "filenam": 5, "assign": 5, "rawdna": 5, "channel1": 5, "rawgfp": 5, "channel": [5, 6, 11], "add": [5, 8], "e": [5, 11, 12], "g": [5, 12], "primari": 5, "achiev": 5, "mode": 5, "adequ": 5, "secondari": 5, "tune": [5, 7, 10, 11], "distanc": 5, "method": [5, 7, 8], "captur": 5, "edg": 5, "most": 5, "output": [5, 7, 8], "gfpanddna": 5, "colortograi": 5, "It": [5, 12], "directori": 5, "save": [5, 9, 12], "subdirectori": 5, "metadata": 5, "extract": 5, "subfold": 5, "path": 5, "chang": [5, 7, 9, 13], "abov": [5, 7], "mention": 5, "modifi": [5, 6, 12], "ye": [5, 12], "option": [5, 9, 11, 12], "mark": 5, "regular": 5, "last": 5, "why": 5, "portion": 5, "unabl": 5, "reconcil": 5, "none": 5, "across": [5, 8, 12], "folder": 5, "box": 5, "nest": 5, "sever": 6, "thei": [6, 7, 8, 12], "describ": 6, "along": 6, "sourc": [6, 12], "ani": [6, 8, 12], "public": [6, 11], "cite": 6, "origin": 6, "citat": 6, "provid": [6, 7, 8, 11, 12], "nation": 6, "institut": 6, "standard": 6, "technolog": 6, "databas": 6, "handwritten": 6, "digit": 6, "often": 6, "machin": [6, 11], "grayscal": 6, "28x28": 6, "pixel": 6, "small": [6, 8], "full": 6, "accesesd": 6, "websit": 6, "author": 6, "licencs": 6, "cc": 6, "BY": 6, "sa": 6, "1109": 6, "5": [6, 12], "726791": 6, "caenorhabd": 6, "nematod": 6, "worm": 6, "commonli": 6, "model": [6, 8], "organ": 6, "transgen": 6, "promot": 6, "gene": 6, "clec": 6, "60": 6, "fuse": 6, "mcherri": 6, "pharynx": 6, "wild": 6, "type": 6, "posterior": 6, "intestin": [6, 11], "pmk": 6, "km25": 6, "mutant": 6, "elev": 6, "visibl": 6, "anterior": 6, "close": [6, 7, 12], "There": [6, 9, 12], "multipl": [6, 7], "javier": 6, "irazoqui": 6, "bbbc012": 6, "cc0": 6, "1038": 6, "nmeth": 6, "2083": 6, "These": [6, 7, 8], "licenc": 6, "osteosarcoma": 6, "stabli": 6, "transfect": 6, "fluoresc": 6, "tag": 6, "forkhead": 6, "protein": 6, "fkhr": 6, "egfp": 6, "prolifer": 6, "constantli": 6, "traffick": 6, "treat": [6, 11], "drug": 6, "prevent": 6, "pi3": 6, "kinas": 6, "pkb": 6, "signal": 6, "nuclear": 6, "inhibit": 6, "accumul": 6, "hela": 6, "diseas": 6, "associ": 6, "variant": 6, "healthi": 6, "artifact": 6, "jessica": 6, "lacost": 6, "mikko": 6, "taipal": 6, "s": [6, 8, 9, 11, 12], "lab": 6, "univers": 6, "toronto": 6, "1016": 6, "09": 6, "003": 6, "configur": 7, "variabl": 7, "process": [7, 8, 12], "neural": 7, "network": 7, "yield": 7, "cannot": [7, 12], "estim": 7, "intuit": [7, 8], "problem": [7, 13], "difficult": 7, "everi": 7, "introduc": 7, "avail": [7, 9, 10, 11, 12], "consider": [7, 12], "ultim": [7, 8], "goal": [7, 10], "interact": 7, "influenc": 7, "classif": [7, 8, 9, 11, 12], "tensorflow": [7, 12], "playground": 7, "tricki": 7, "hard": 7, "strict": 7, "recommend": [7, 12], "observ": 7, "give": [7, 8], "rough": 7, "feel": 7, "magnitud": 7, "intend": 7, "point": [7, 8], "familiar": 7, "impact": [7, 13], "support": [7, 10], "work": [7, 8, 10, 12], "brief": 7, "what": [7, 8, 9], "gener": [7, 9, 12], "typic": 7, "fold": 7, "good": 7, "01": 7, "sensibl": 7, "slightli": [7, 12], "similar": 7, "plai": 7, "around": 7, "check": 7, "overview": 7, "32": 7, "64": 7, "16": 7, "least": 7, "largest": 7, "reason": [7, 12], "frame": 7, "eg": 7, "20": 7, "minut": 7, "automat": [7, 8], "respons": 7, "expect": 7, "bring": 7, "closer": 7, "introduct": 7, "wa": 7, "lower": 7, "wherea": 7, "poor": 7, "higher": 7, "tell": 7, "aforement": [7, 8], "reduc": [7, 13], "much": 7, "repeat": 7, "until": 7, "analyz": 7, "end": [7, 12], "ground": 7, "truth": 7, "comparison": 7, "allow": [7, 8, 11], "applic": [8, 12], "minim": 8, "setup": 8, "vision": 8, "releas": 8, "region": 8, "distinct": 8, "group": 8, "launch": 8, "watch": 8, "youtub": 8, "activ": 8, "progress": [8, 9], "re": [8, 12], "choic": 8, "manual": [8, 12], "pen": 8, "addit": [8, 12], "quick": 8, "both": [8, 12], "easili": 8, "sure": [8, 12], "place": 8, "where": [8, 9, 10], "futur": [8, 12], "aim": 8, "z": 8, "plane": 8, "interpol": 8, "3d": 8, "even": [8, 12], "easier": 8, "subject": 8, "matter": 8, "bacteria": 8, "cultur": 8, "insect": 8, "power": 8, "comput": [8, 9], "understand": 8, "teach": 8, "g1": 8, "g2": 8, "m": 8, "phase": 8, "cycl": 8, "intens": [8, 10], "through": 8, "pattern": 8, "without": [8, 11], "reli": 8, "highli": [8, 12], "customiz": 8, "larg": 8, "present": 8, "prepar": 8, "function": 8, "develop": 8, "think": [8, 12], "discuss": 8, "github": 8, "repo": [8, 12], "abl": 9, "previou": 9, "access": 9, "brows": 9, "ui": 9, "help": [9, 13], "document": 9, "send": 9, "feedback": 9, "local": [9, 11, 12], "compress": 9, "zip": 9, "share": 9, "load": [9, 12], "directli": 9, "uncompress": 9, "zarr": 9, "simpli": 9, "o": 9, "coco": [9, 11], "context": 9, "format": [9, 11], "sometim": 10, "experi": [10, 11], "just": 10, "other": [10, 11], "deeper": 10, "care": 10, "OR": 10, "geometri": 10, "alon": 10, "roll": 10, "stai": [10, 11], "bar": 10, "research": 11, "pre": [11, 12], "paint": 11, "rnai": 11, "reagent": 11, "http": 11, "portal": 11, "broadinstitut": 11, "org": 11, "gpp": 11, "clone": 11, "detail": 11, "cloneld": 11, "trcn0000195467": 11, "stain": 11, "five": 11, "design": 11, "cellpos": [11, 12], "generalist": 11, "algorithm": 11, "cellular": 11, "fluorec": 11, "stardistfluo": 11, "ideal": 11, "star": 11, "convex": 11, "stardistvh": 11, "hematoxylin": 11, "eosin": 11, "h": 11, "ssd": 11, "natur": 11, "photograph": 11, "80": 11, "kite": 11, "glandsegment": 11, "gland": 11, "colon": 11, "histolog": 11, "challeng": 11, "contest": 11, "gla": 11, "29": 11, "switch": 11, "interfac": 11, "note": 11, "ai4lif": 11, "bioengine30": 11, "server": 11, "stardist": 11, "client": 11, "leav": [11, 12], "upload": 11, "fetch": 11, "remot": 11, "feaur": 11, "view": 11, "center": 11, "downstream": 11, "trai": 12, "mechan": 12, "auto": 12, "period": 12, "state": 12, "preprocess": 12, "architectur": 12, "weight": 12, "reload": 12, "its": 12, "paramat": 12, "bin": 12, "visit": 12, "long": 12, "refresh": 12, "tab": 12, "serv": 12, "docker": 12, "instruct": 12, "main": 12, "readm": 12, "code": 12, "necessari": 12, "app": 12, "No": 12, "certain": 12, "transmit": 12, "clearli": 12, "indic": 12, "telemetri": 12, "extern": 12, "api": 12, "call": 12, "convolut": 12, "layer": 12, "pool": 12, "dens": 12, "initi": 12, "random": 12, "mobilenetv1": 12, "mobilenet_v1_0": 12, "25_224": 12, "rest": 12, "frozen": 12, "keep": 12, "hit": 12, "accuraci": 12, "remain": 12, "enter": 12, "via": 12, "avoid": 12, "js": 12, "webgl": 12, "chrome": 12, "prefer": 12, "advanc": 12, "system": 12, "hardwar": 12, "acceler": 12, "major": 12, "valid": 12, "second": 12, "ident": 12, "4": 12, "6": 12, "independ": 12, "still": 12, "due": 12, "step": 12, "draw": 12, "shuffl": 12, "stabil": 12, "frequent": 12, "alwai": 12, "old": 12, "again": 12, "hasn": 12, "t": 12, "appl": 13, "caus": 13, "crash": 13, "batch": 13, "size": 13, "allevi": 13, "lightweight": 13, "mnist": 13, "hyperparamet": 13}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"how": [0, 7, 12], "convert": 0, "piximi": [0, 2, 8, 12], "classif": [0, 3, 4], "model": [0, 4, 7, 11, 12], "us": [0, 5, 12], "outsid": 0, "step": [0, 8], "walkthrough": 0, "chang": 0, "paramet": [0, 7], "cell": [0, 5, 6], "below": 0, "Then": 0, "simpli": 0, "run": [0, 11, 12], "rest": 0, "If": [0, 12], "you": 0, "re": 0, "comfort": 0, "appli": 0, "tensorflow": 0, "s": 0, "done": 0, "we": 0, "ve": 0, "provid": 0, "some": 0, "conveni": 0, "function": [0, 7], "The": [1, 8], "annot": [1, 8], "process": 1, "add": 1, "subtract": 1, "intersect": 1, "color": 1, "quick": 1, "rectangular": 1, "ellipt": 1, "polygon": 1, "pen": 1, "lasso": 1, "cite": 2, "imag": [4, 5, 8, 11], "1": [4, 5, 11], "load": [4, 11], "2": [4, 5, 11], "categor": 4, "3": [4, 5, 11], "train": [4, 12], "what": [4, 12], "an": 4, "epoch": [4, 7], "valid": 4, "accuraci": 4, "vs": 4, "4": [4, 5, 11], "predict": 4, "class": 4, "unlabel": 4, "data": 4, "copyright": [4, 5], "creat": 5, "crop": [5, 6], "cellprofil": 5, "import": 5, "identifyprimaryobject": 5, "identifysecondaryobject": 5, "graytocolor": 5, "5": 5, "savecroppedobject": 5, "pipelin": 5, "modif": 5, "earlier": 5, "exampl": 6, "dataset": 6, "mnist": 6, "c": 6, "elegan": 6, "human": 6, "u2o": 6, "u20": 6, "cytoplasm": 6, "plp1": 6, "local": 6, "hyperparamet": 7, "select": 7, "descript": 7, "optim": 7, "algorithm": 7, "loss": 7, "learn": 7, "rate": 7, "batch": 7, "size": 7, "doe": [7, 12], "updat": 7, "its": 7, "intern": 7, "discoveri": 8, "known": [8, 13], "issu": [8, 13], "classifi": [8, 12], "next": 8, "main": 9, "menu": 9, "left": 9, "measur": 10, "segment": 11, "output": 11, "technic": 12, "faq": 12, "crash": 12, "can": 12, "i": 12, "recov": 12, "my": 12, "project": 12, "offlin": 12, "Is": 12, "log": 12, "ar": 12, "internet": 12, "connect": 12, "lost": 12, "while": 12, "possibl": 12, "see": 12, "summari": 12, "gpu": 12, "same": 12, "multipl": 12, "time": 12, "why": 12, "do": 12, "get": 12, "differ": 12, "result": 12, "m1": 13, "processor": 13}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 6, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinx": 56}})