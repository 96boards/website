---
title: Dragonboard410c Compliance
description: |-
    96Boards Compliance is designed to ensure a level of hardware and software functionality and quality for the 96Boards Community Board program.
permalink: /compliance/dragonboard410c/
layout: jumbotron-container
css-package: about

---
## Dragonboard410c Compliance
<div style="overflow-x:auto;">
<table id="TABLE_1">
<colgroup id="COLGROUP_2">
    <col id="COL_3">
    <col id="COL_4">
    <col id="COL_5">
    <col id="COL_6">
    <col id="COL_7">
    <col id="COL_8">
    <col id="COL_9">
    <col id="COL_10">
</colgroup>

<tbody id="TBODY_11">

<tr id="TR_12">

<th id="TH_13">Key</th>

<th id="TH_14">General</th>

<th id="TH_15">Response</th>

<th id="TH_16">Comments</th>

<th id="TH_17">Validation Results (Linaro)</th>

<th id="TH_18">Linaro comments</th>

<th id="TH_19">Final Results (Linaro)</th>

<th id="TH_20">Validation Test Description</th>

</tr>

<tr id="TR_21">

<td id="TD_23">Name of the board</td>

<td id="TD_24">Dragonboard 410c</td>

</tr>

<tr id="TR_30">

<td id="TD_32">Email address (primary)</td>

</tr>

<tr id="TR_39">

<td id="TD_41">Email addresses (secondary)</td>

</tr>

<tr id="TR_48">

<td id="TD_50">Target Specification</td>

<td id="TD_51">CE v1.0</td>

</tr>

<tr id="TR_57">

<td id="TD_59">Form Factor</td>

<td id="TD_60">CE v1.0 (standard) – 85 x 54 mm</td>

<td id="TD_61">+/- 0.25mm error margin allowed</td>

<td id="TD_62">Pass</td>

<td id="TD_63">USB host connectors are slightly higher than allowed 7mm; power connector is around 2mm too close to the shorter board edge</td>

<td id="TD_64">Pass</td>

<td id="TD_65">Using 3D templates for the appropriate form-factor</td>

</tr>

<tr id="TR_75">

<th id="TH_76">Key</th>

<th id="TH_77">Documentation</th>

<th id="TH_78">Response</th>

<th id="TH_79">Comments</th>

<th id="TH_80">Validation Results (Linaro)</th>

<th id="TH_81">Linaro comments</th>

<th id="TH_82">Final Results (Linaro)</th>

<th id="TH_83">Validation Test Description</th>

</tr>

<tr id="TR_84">

<td id="TD_86">Board Schematic published</td>

<td id="TD_87">Yes</td>

<td id="TD_89">Pass</td>

<td id="TD_91">Pass</td>

</tr>

<tr id="TR_93">

<td id="TD_95">Board Reference Manual published</td>

<td id="TD_96">Yes</td>

<td id="TD_97">[Board reference manual should follow template](https://docs.google.com/document/d/1nK5aHZrnklzvdGYMtqlyUZzz2DKCwiUByeMXyV2BCgg/edit)</td>

<td id="TD_99">Pass</td>

<td id="TD_101">Pass</td>

</tr>

<tr id="TR_103">

<td id="TD_105">SoC technical reference published</td>

<td id="TD_106">No</td>

<td id="TD_107">[SoC TRM published as per guidelines](https://docs.google.com/document/d/1qP4r5MPRS9k0J8vE5hr4Lfq_rBYxWisj7TBrM9F2iOU/edit)</td>

<td id="TD_109">Fail</td>

<td id="TD_111">Waived</td>

<td id="TD_112">Additional documentation will be published once made available.</td>

</tr>

<tr id="TR_122">

<th id="TH_123">Key</th>

<th id="TH_124">Memory and Storage</th>

<th id="TH_125">Response</th>

<th id="TH_126">Comments</th>

<th id="TH_127">Validation Results (Linaro)</th>

<th id="TH_128">Linaro comments</th>

<th id="TH_129">Final Results (Linaro)</th>

<th id="TH_130">Validation Test Description</th>

</tr>

<tr id="TR_131">

<td id="TD_133">Onboard DRAM (GB)</td>

<td id="TD_134">1</td>

<td>= 0.5GB; EE: >= 1GB or DIMM'}" id="TD_135">CE: >= 0.5GB; EE: >= 1GB or DIMM</td>

<td id="TD_136">Pass</td>

<td id="TD_138">Pass</td>

</tr>

<tr id="TR_140">

<td id="TD_142">Additional memory sockets</td>

<td id="TD_144">EE: Mandatory if no onboard DRAM</td>

<td id="TD_145">Ignored</td>

<td id="TD_147">Ignored</td>

</tr>

<tr id="TR_149">

<td id="TD_151">SD Card</td>

<td id="TD_152">microSDHC</td>

<td id="TD_153">CE: Mandatory</td>

<td id="TD_154">Pass</td>

<td id="TD_156">Pass</td>

</tr>

<tr id="TR_158">

<td id="TD_160">Boot from SD Card?</td>

<td id="TD_161">Yes</td>

<td id="TD_163">Pass</td>

<td id="TD_165">Pass</td>

</tr>

<tr id="TR_167">

<td id="TD_169">Boot ROM</td>

<td id="TD_170">No</td>

<td id="TD_171">CE: optional, only if SD card is not bootable</td>

<td id="TD_172">Ignored</td>

<td id="TD_174">Ignored</td>

</tr>

<tr id="TR_176">

<td id="TD_178">Boot ROM size (MB)</td>

<td id="TD_180">CE: 8MB (optional)</td>

<td id="TD_181">Ignored</td>

<td id="TD_183">Ignored</td>

</tr>

<tr id="TR_185">

<td id="TD_187">Onboard Flash storage</td>

<td id="TD_188">Yes</td>

<td id="TD_189">Optional</td>

<td id="TD_190">Pass</td>

<td id="TD_192">Pass</td>

</tr>

<tr id="TR_194">

<td id="TD_196">Onboard Flash storage size (GB)</td>

<td id="TD_197">8</td>

<td id="TD_198">Optional</td>

<td id="TD_199">Pass</td>

<td id="TD_201">Pass</td>

</tr>

<tr id="TR_203">

<td id="TD_205">SATA interface</td>

<td id="TD_206">None</td>

<td id="TD_207">Optional</td>

<td id="TD_208">Ignored</td>

<td id="TD_210">Ignored</td>

</tr>

<tr id="TR_221">

<th id="TH_222">Key</th>

<th id="TH_223">Networking</th>

<th id="TH_224">Response</th>

<th id="TH_225">Comments</th>

<th id="TH_226">Validation Results (Linaro)</th>

<th id="TH_227">Linaro comments</th>

<th id="TH_228">Final Results (Linaro)</th>

<th id="TH_229">Validation Test Description</th>

</tr>

<tr id="TR_230">

<td id="TD_232">Wifi protocol</td>

<td id="TD_233">802.11 g/n/ac</td>

<td id="TD_235">Pass</td>

</tr>

<tr id="TR_239">

<td id="TD_241">Bluetooth 4.0 LE</td>

<td id="TD_242">Yes</td>

<td id="TD_244">Pass</td>

</tr>

<tr id="TR_248">

<td id="TD_250">Ethernet</td>

<td id="TD_251">No</td>

<td id="TD_252">EE: mandatory</td>

<td id="TD_253">Ignored</td>

</tr>

<tr id="TR_266">

<th id="TH_267">Key</th>

<th id="TH_268">Debugging</th>

<th id="TH_269">Response</th>

<th id="TH_270">Comments</th>

<th id="TH_271">Validation Results (Linaro)</th>

<th id="TH_272">Linaro comments</th>

<th id="TH_273">Final Results (Linaro)</th>

<th id="TH_274">Validation Test Description</th>

</tr>

<tr id="TR_275">

<td id="TD_277">UART 0</td>

<td id="TD_278">No</td>

<td id="TD_279">EE: micro-B USB in specified location</td>

<td id="TD_280">Ignored</td>

<td id="TD_282">Ignored</td>

</tr>

<tr id="TR_284">

<td id="TD_286">UART 1 (LS expansion interface)</td>

<td id="TD_287">Yes</td>

<td id="TD_288">default mandatory UART</td>

<td id="TD_289">Pass</td>

<td id="TD_291">Pass</td>

</tr>

<tr id="TR_293">

<td id="TD_295">UART 2 (LS expansion interface)</td>

<td id="TD_296">No</td>

<td id="TD_297">CE: optional</td>

<td id="TD_298">Ignored</td>

<td id="TD_300">Ignored</td>

</tr>

<tr id="TR_311">

<td id="TD_313">4 User LEDs</td>

<td id="TD_314">Yes</td>

<td id="TD_316">Pass</td>

<td id="TD_318">Pass</td>

</tr>

<tr id="TR_320">

<td id="TD_322">WiFi LED</td>

<td id="TD_323">Yes</td>

<td id="TD_325">Pass</td>

<td id="TD_326">WiFi and BT LEDs are inverted compared to the spec</td>

<td id="TD_327">Pass</td>

</tr>

<tr id="TR_329">

<td id="TD_331">BT LED</td>

<td id="TD_332">Yes</td>

<td id="TD_334">Pass</td>

<td id="TD_335">WiFi and BT LEDs are inverted compared to the spec</td>

<td id="TD_336">Pass</td>

</tr>

<tr id="TR_338">

<td id="TD_340">JTAG</td>

<td id="TD_341">No</td>

<td id="TD_342">Optional</td>

</tr>

<tr id="TR_356">

<th id="TH_357">Key</th>

<th id="TH_358">USB</th>

<th id="TH_359">Response</th>

<th id="TH_360">Comments</th>

<th id="TH_361">Validation Results (Linaro)</th>

<th id="TH_362">Linaro comments</th>

<th id="TH_363">Final Results (Linaro)</th>

<th id="TH_364">Validation Test Description</th>

</tr>

<tr id="TR_365">

<td id="TD_367">Port 1 – Host (Protocol)</td>

<td id="TD_368">USB 2.x</td>

<td id="TD_370">Pass</td>

<td id="TD_372">Pass</td>

</tr>

<tr id="TR_374">

<td id="TD_376">Port 1 – Host (Connector)</td>

<td id="TD_377">Type A</td>

<td id="TD_379">Pass</td>

<td id="TD_381">Pass</td>

</tr>

<tr id="TR_383">

<td id="TD_385">Port 2 – Host (Protocol)</td>

<td id="TD_386">USB 2.x</td>

<td id="TD_388">Pass</td>

<td id="TD_390">Pass</td>

</tr>

<tr id="TR_392">

<td id="TD_394">Port 2 – Host (Connector)</td>

<td id="TD_395">Type A</td>

<td id="TD_397">Pass</td>

<td id="TD_399">Pass</td>

</tr>

<tr id="TR_401">

<td id="TD_403">Port 3 – Slave (Protocol)</td>

<td id="TD_404">USB 2.x</td>

<td id="TD_406">Pass</td>

<td id="TD_408">Pass</td>

</tr>

<tr id="TR_410">

<td id="TD_412">Port 3 – Slave (Connector)</td>

<td id="TD_413">micro-B (for slave-only)</td>

<td id="TD_415">Pass</td>

<td id="TD_417">Pass</td>

</tr>

<tr id="TR_419">

<td id="TD_421">Port 4 – Host (Protocol)</td>

<td id="TD_424">Ignored</td>

<td id="TD_426">Ignored</td>

</tr>

<tr id="TR_428">

<td id="TD_430">Port 4 – Host (Connector)</td>

<td id="TD_433">Ignored</td>

<td id="TD_435">Ignored</td>

</tr>

<tr id="TR_446">

<th id="TH_447">Key</th>

<th id="TH_448">Display</th>

<th id="TH_449">Response</th>

<th id="TH_450">Comments</th>

<th id="TH_451">Validation Results (Linaro)</th>

<th id="TH_452">Linaro comments</th>

<th id="TH_453">Final Results (Linaro)</th>

<th id="TH_454">Validation Test Description</th>

</tr>

<tr id="TR_455">

<td id="TD_457">Display Type</td>

<td id="TD_458">HDMI</td>

<td id="TD_459">CE: Audio support for at least 1 channel is mandatory</td>

<td id="TD_460">Pass</td>

</tr>

<tr id="TR_464">

<td id="TD_466">Display Connector</td>

<td id="TD_467">Type A (full-size)</td>

<td id="TD_469">Pass</td>

</tr>

<tr id="TR_473">

<td id="TD_475">MIPI DSI port on HS expansion bus</td>

<td id="TD_476">Yes</td>

<td id="TD_478">Pass</td>

</tr>

<tr id="TR_482">

<td id="TD_484">MIPI DSI lanes</td>

<td id="TD_485">4</td>

<td id="TD_487">Pass</td>

</tr>

<tr id="TR_500">

<th id="TH_501">Key</th>

<th id="TH_502">Camera</th>

<th id="TH_503">Response</th>

<th id="TH_504">Comments</th>

<th id="TH_505">Validation Results (Linaro)</th>

<th id="TH_506">Linaro comments</th>

<th id="TH_507">Final Results (Linaro)</th>

<th id="TH_508">Validation Test Description</th>

</tr>

<tr id="TR_509">

<td id="TD_511">MIPI CSI-2 ports</td>

<td id="TD_512">2</td>

<td id="TD_513">(Review) CE: Port 1 should be on CSI0 port (1-4 lanes). CSI1 port supports 1-2 lanes</td>

<td id="TD_514">Pass</td>

</tr>

<tr id="TR_527">

<th id="TH_528">Key</th>

<th id="TH_529">Audio</th>

<th id="TH_530">Response</th>

<th id="TH_531">Comments</th>

<th id="TH_532">Validation Results (Linaro)</th>

<th id="TH_533">Linaro comments</th>

<th id="TH_534">Final Results (Linaro)</th>

<th id="TH_535">Validation Test Description</th>

</tr>

<tr id="TR_536">

<td id="TD_538">Audio channels (BT)</td>

<td id="TD_539">2</td>

<td id="TD_540">CE: I2S/PCM channel should be provided on LS expansion interface</td>

<td id="TD_541">Pass</td>

</tr>

<tr id="TR_545">

<td id="TD_547">Audio channels (Display)</td>

<td id="TD_548">2</td>

<td id="TD_550">Pass</td>

</tr>

<tr id="TR_563">

<th id="TH_564">Key</th>

<th id="TH_565">DC Power</th>

<th id="TH_566">Response</th>

<th id="TH_567">Comments</th>

<th id="TH_568">Validation Results (Linaro)</th>

<th id="TH_569">Linaro comments</th>

<th id="TH_570">Final Results (Linaro)</th>

<th id="TH_571">Validation Test Description</th>

</tr>

<tr id="TR_572">

<td id="TD_574">Power source</td>

<td id="TD_575">DC Power Jack (8-18V)</td>

<td id="TD_577">Pass</td>

</tr>

<tr id="TR_590">

<th id="TH_591">Key</th>

<th id="TH_592">Buttons / Switches / Jumpers</th>

<th id="TH_593">Response</th>

<th id="TH_594">Comments</th>

<th id="TH_595">Validation Results (Linaro)</th>

<th id="TH_596">Linaro comments</th>

<th id="TH_597">Final Results (Linaro)</th>

<th id="TH_598">Validation Test Description</th>

</tr>

<tr id="TR_599">

<td id="TD_601">Power on/off</td>

<td id="TD_602">Yes</td>

<td id="TD_603">Mandatory</td>

<td id="TD_604">Pass</td>

</tr>

<tr id="TR_608">

<td id="TD_610">Hard reset</td>

<td id="TD_611">Yes</td>

<td id="TD_612">Mandatory</td>

<td id="TD_613">Pass</td>

</tr>

<tr id="TR_617">

<td id="TD_619">Auto power up</td>

<td id="TD_620">Through Switch</td>

<td id="TD_621">Mandatory</td>

<td id="TD_622">Pass</td>

</tr>

<tr id="TR_626">

<td id="TD_628">USB mode change</td>

<td id="TD_629">NA</td>

<td id="TD_630">Optional, to change mode of the OTG port</td>

<td id="TD_631">Ignored</td>

</tr>

<tr id="TR_644">

<th id="TH_645">Key</th>

<th id="TH_646">Expansion header</th>

<th id="TH_647">Response</th>

<th id="TH_648">Comments</th>

<th id="TH_649">Validation Results (Linaro)</th>

<th id="TH_650">Linaro comments</th>

<th id="TH_651">Final Results (Linaro)</th>

<th id="TH_652">Validation Test Description</th>

</tr>

<tr id="TR_653">

<td id="TD_655">Low-speed expansion header</td>

<td id="TD_656">Yes</td>

<td id="TD_657">Signals to be exposed as per spec</td>

<td id="TD_658">Pass</td>

</tr>

<tr id="TR_662">

<td id="TD_664">High-speed expansion header</td>

<td id="TD_665">Yes</td>

<td id="TD_666">CE: mandatory</td>

<td id="TD_667">Pass</td>

</tr>

<tr id="TR_680">

<th id="TH_681">Key</th>

<th id="TH_682">Miscellaneous</th>

<th id="TH_683">Response</th>

<th id="TH_684">Comments</th>

<th id="TH_685">Validation Results (Linaro)</th>

<th id="TH_686">Linaro comments</th>

<th id="TH_687">Final Results (Linaro)</th>

<th id="TH_688">Validation Test Description</th>

</tr>

<tr id="TR_689">

<td id="TD_691">External Fan</td>

<td id="TD_692">+5V</td>

<td id="TD_694">Pass</td>

<td id="TD_696">Pass</td>

</tr>

<tr id="TR_698">

<td id="TD_700">PCIe</td>

<td id="TD_701">None</td>

<td id="TD_702">EE: location specified but optional</td>

<td id="TD_703">Ignored</td>

<td id="TD_705">Ignored</td>

</tr>

<tr id="TR_743">

<th id="TH_744">Key</th>

<th id="TH_745">Software</th>

<th id="TH_746">Response</th>

<th id="TH_747">Comments</th>

<th id="TH_748">Validation Results (Linaro)</th>

<th id="TH_749">Linaro comments</th>

<th id="TH_750">Final Results (Linaro)</th>

<th id="TH_751">Validation Test Description</th>

</tr>

<tr id="TR_752">

<td id="TD_754">Kernel git tree URL</td>

<td id="TD_755">[https://git.linaro.org/landing-teams/working/qualcomm/kernel.git](https://git.linaro.org/landing-teams/working/qualcomm/kernel.git)</td>

</tr>

<tr id="TR_762">

<td id="TD_764">Kernel version</td>

<td id="TD_766">4.4 kernel</td>

<td id="TD_767">Pass</td>

</tr>

<tr id="TR_771">

<td id="TD_773">Kernel compliance Level</td>

<td id="TD_774">Level 1</td>

<td id="TD_775">Level definitions as per spec</td>

<td id="TD_776">Pass</td>

<td id="TD_777">Mainline kernel boots at least to ramdisk (http://kernelci.org/boot/apq8016-sbc/job/mainline/kernel/v4.5-rc2/defconfig/defconfig/lab/lab-tbaker/?_id=56af0a7559b514fcbbfa5dbc)</td>

<td id="TD_778">Pass</td>

</tr>

<tr id="TR_789">

<td id="TD_791">All bootloader bits are recommended to be open source</td>

<td id="TD_792">No</td>

<td id="TD_793">According to the spec, it is recommended for everything after SoC reset to be available as open source</td>

<td id="TD_794">Fail</td>

<td id="TD_795">1st stage bootloader is a proprietary blob</td>

<td id="TD_796">Waived – optional</td>

</tr>

<tr id="TR_798">

<td id="TD_800">Last-stage bootloader git tree URL</td>

<td id="TD_802">e.g. UEFI/EDK2 or u-boot</td>

</tr>

<tr id="TR_807">

<td id="TD_809">Fastboot protocol support</td>

<td id="TD_810">Yes</td>

<td id="TD_812">Pass</td>

<td id="TD_814">Pass</td>

</tr>

<tr id="TR_816">

<td id="TD_818">User can update bootloader</td>

<td id="TD_819">Yes</td>

<td id="TD_821">Pass</td>

</tr>

<tr id="TR_825">

<td id="TD_827">Possibility to unbrick the board w/o special hardware</td>

<td id="TD_828">Yes</td>

<td id="TD_830">Pass</td>

<td id="TD_831">not sure if that is the right answer</td>

</tr>

<tr id="TR_843">

<td id="TD_845">GPU acceleration</td>

<td id="TD_846">No Linux binary blobs required</td>

<td id="TD_848">Pass</td>

</tr>

<tr id="TR_852">

<td id="TD_854">Camera ISP</td>

<td id="TD_855">NA</td>

</tr>

<tr id="TR_861">

<td id="TD_863">DSP</td>

<td id="TD_864">NA</td>

</tr>

<tr id="TR_870">

<td id="TD_872">Multimedia</td>

<td id="TD_873">No binary blobs required</td>

<td id="TD_875">Pass</td>

</tr>

<tr id="TR_888">

<th id="TH_889">Key</th>

<th id="TH_890">Software Functionality</th>

<th id="TH_891">Response</th>

<th id="TH_892">Comments</th>

<th id="TH_893">Validation Results (Linaro)</th>

<th id="TH_894">Linaro comments</th>

<th id="TH_895">Final Results (Linaro)</th>

<th id="TH_896">Validation Test Description</th>

</tr>

<tr id="TR_897">

<td id="TD_899">Boot to Graphical UI</td>

<td id="TD_900">Yes</td>

<td id="TD_902">Pass</td>

</tr>

<tr id="TR_906">

<td id="TD_908">Graphics acceleration using SoC GPU</td>

<td id="TD_909">Yes</td>

<td id="TD_911">Pass</td>

</tr>

<tr id="TR_915">

<td id="TD_917">Standard set of Distribution end user applications</td>

<td id="TD_918">Yes</td>

<td id="TD_920">Pass</td>

</tr>

<tr id="TR_924">

<td id="TD_926">Video playback support for media files</td>

<td id="TD_927">Yes</td>

<td id="TD_929">Pass</td>

</tr>

<tr id="TR_933">

<td id="TD_935">Audio playback support for AV media files via A2DP Bluetooth and display audio</td>

<td id="TD_936">Yes</td>

<td id="TD_938">Pass</td>

<td id="TD_939">Checked BT. HDMI audio will follow</td>

</tr>

<tr id="TR_942">

<td id="TD_944">Networking using all onboard interfaces and USB ethernet interfaces</td>

<td id="TD_945">Yes</td>

<td id="TD_947">Pass</td>

</tr>

<tr id="TR_951">

<td id="TD_953">Software power shutdown and reboot options</td>

<td id="TD_954">Yes</td>

<td id="TD_955">shutdown results in reboot</td>

<td id="TD_956">Fail</td>

<td id="TD_958">Waived</td>

<td id="TD_959">Will be addressed in future revision of the production boards.</td>

</tr>

<tr id="TR_960">

<td id="TD_962">Appropriate activity LEDs (e.g. Bluetooth, WiFi)</td>

<td id="TD_963">Yes</td>

<td id="TD_965">Fail</td>

<td id="TD_966">BT and WiFi LEDs don’t blink when device is in use</td>

<td id="TD_967">Waived</td>

<td id="TD_968">Software bug tracked</td>

</tr>

<tr id="TR_969">

<td id="TD_971">Additional storage is usable: eMMC (if fitted), SD, SATA, USB</td>

<td id="TD_972">Yes</td>

<td id="TD_974">Pass</td>

</tr>

</tbody>

</table>

</div>
